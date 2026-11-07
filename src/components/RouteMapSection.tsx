import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MAP_WAYPOINTS, REGIONS } from "../data/tripData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import type { MapWaypoint } from "../types/trip";

export const RouteMapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [selectedWaypoint, setSelectedWaypoint] = useState<MapWaypoint>(MAP_WAYPOINTS[1]);

  const getRegionColor = (regionId: string) => {
    return REGIONS.find((r) => r.id === regionId)?.color || "#0B4F4A";
  };

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [13.7563, 100.5018],
      zoom: 6,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=he", {
      maxZoom: 19,
      attribution: "&copy; Google Maps",
    }).addTo(map);

    const coords: L.LatLngExpression[] = [];

    MAP_WAYPOINTS.forEach((wp) => {
      const color = getRegionColor(wp.region);
      coords.push([wp.lat, wp.lng]);

      const icon = L.divIcon({
        className: "custom-route-pin",
        html: `<div style="
          background: ${color};
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          border: 3px solid #FAF7F2;
          box-shadow: 0 4px 12px rgba(20,35,33,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Rubik', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
        ">${wp.stepNumber}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16],
      });

      const marker = L.marker([wp.lat, wp.lng], { icon }).addTo(map);
      marker.bindPopup(`
        <div dir="rtl" style="font-family: 'Assistant', sans-serif; text-align: right; min-width: 210px; padding: 4px;">
          <div style="font-family: 'Rubik', sans-serif; font-weight: 700; font-size: 0.95rem; color: #142321; margin-bottom: 2px;">${wp.name}</div>
          <div style="font-size: 0.78rem; font-weight: 700; color: ${color}; margin-bottom: 4px;">${wp.dates} • ${wp.hotelName}</div>
          <div style="font-size: 0.82rem; color: #4A5D5A; margin-bottom: 8px; line-height: 1.4;">${wp.description}</div>
          <a href="https://maps.google.com/?q=${wp.gmapQuery}&hl=iw" target="_blank" rel="noreferrer" style="display: inline-block; background: #0B4F4A; color: #FAF7F2; padding: 4px 10px; border-radius: 6px; text-decoration: none; font-size: 0.76rem; font-weight: 700;">פתח ב-Google Maps</a>
        </div>
      `);

      marker.on("click", () => {
        setSelectedWaypoint(wp);
      });

      markersRef.current[wp.id] = marker;
    });

    if (coords.length > 1) {
      L.polyline(coords, {
        color: "#0B4F4A",
        weight: 3,
        opacity: 0.8,
        dashArray: "8, 8",
      }).addTo(map);
      map.fitBounds(L.latLngBounds(coords), { padding: [36, 36] });
    }

    mapInstanceRef.current = map;

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const focusWaypoint = (wp: MapWaypoint | "all") => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (wp === "all") {
      const coords: L.LatLngExpression[] = MAP_WAYPOINTS.map((p) => [p.lat, p.lng]);
      map.fitBounds(L.latLngBounds(coords), { padding: [36, 36] });
      map.closePopup();
      return;
    }

    setSelectedWaypoint(wp);
    map.setView([wp.lat, wp.lng], 12, { animate: true });
    const marker = markersRef.current[wp.id];
    if (marker) {
      marker.openPopup();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <CardTitle className="text-xl">מפת המסלול והמלונות המוזמנים (10 תחנות)</CardTitle>
              <CardDescription>
                בנגקוק שדה התעופה ← קוקונט איילנד ← פאטונג ← או נאנג וריילי (קראבי) ← צ'יאנג מאי ← הלופ הצפוני (פאי, מאה הונג סון, מאה סריאנג) ← בנגקוק
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => focusWaypoint("all")}
            >
              <Navigation className="h-4 w-4" />
              הצג את כל תאילנד
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {MAP_WAYPOINTS.map((wp) => {
              const active = selectedWaypoint.id === wp.id;
              return (
                <button
                  key={wp.id}
                  type="button"
                  onClick={() => focusWaypoint(wp)}
                  className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-bold transition-all cursor-pointer min-h-[40px] ${
                    active
                      ? "bg-[#0B4F4A] text-[#FAF7F2] border-[#0B4F4A] shadow-xs"
                      : "bg-[#F5F0E6] text-[#142321] border-[#E2D9C8] hover:bg-[#EAE2D3]"
                  }`}
                >
                  {wp.name}
                </button>
              );
            })}
          </div>

          <div
            ref={mapContainerRef}
            className="h-[360px] sm:h-[430px] w-full rounded-xl border border-[#E6DFD3] overflow-hidden z-10"
          />

          <div className="rounded-xl border border-[#E6DFD3] bg-[#FAF7F2] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <div className="font-display font-bold text-base text-[#142321]">
                  תצוגה חיה: {selectedWaypoint.name} : {selectedWaypoint.hotelName}
                </div>
                <div className="text-xs text-[#4A5D5A]">
                  {selectedWaypoint.dates} • {selectedWaypoint.description}
                </div>
              </div>
              <Button variant="default" size="sm" asChild>
                <a
                  href={`https://maps.google.com/?q=${selectedWaypoint.gmapQuery}&hl=iw`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="h-4 w-4" />
                  ניווט ב-Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
            <div className="h-[260px] w-full overflow-hidden rounded-lg border border-[#E6DFD3]">
              <iframe
                title={selectedWaypoint.name}
                src={`https://maps.google.com/maps?q=${selectedWaypoint.gmapQuery}&hl=iw&z=13&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MAP_WAYPOINTS.map((wp) => {
          const regionMeta = REGIONS.find((r) => r.id === wp.region);
          return (
            <Card key={wp.id} className="hover:border-[#B8AD9B] transition-colors">
              <CardContent className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      style={{
                        backgroundColor: regionMeta?.bgSoft,
                        color: regionMeta?.textColor,
                        borderColor: regionMeta?.borderSoft,
                      }}
                    >
                      {wp.dates}
                    </Badge>
                    <span className="font-display font-bold text-base text-[#142321]">
                      {wp.name}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#0B4F4A]">
                    מלון: {wp.hotelName}
                  </div>
                  <p className="text-xs text-[#4A5D5A] leading-relaxed">
                    {wp.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      focusWaypoint(wp);
                      mapContainerRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  >
                    מקד במפה
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://maps.google.com/?q=${wp.gmapQuery}&hl=iw`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      מפה
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
