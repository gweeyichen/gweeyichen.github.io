
import React, { useState, memo } from 'react';
import { Map, Network, Building, Users, X, Briefcase, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup
} from "react-simple-maps";

// Asia-Pacific map with focus on our key markets
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Define locations with coordinates and team members
const locations = [
  {
    id: "singapore",
    name: { en: "Singapore", zh: "新加坡" },
    coordinates: [103.8198, 1.3521],
    team: {
      en: ["Yichen Gwee", "Thomas Sim"],
      zh: ["魏义成", "Thomas Sim"]
    },
    markerOffset: -15,
    expertise: ["Investment Strategy", "Logistics"]
  },
  {
    id: "japan",
    name: { en: "Japan", zh: "日本" },
    coordinates: [139.6503, 35.6762],
    team: {
      en: ["Wu Zhong", "Yichen Gwee"],
      zh: ["吴总", "魏义成"]
    },
    markerOffset: -15,
    expertise: ["Technology Integration", "Real Estate"]
  },
  {
    id: "hongKong",
    name: { en: "Hong Kong", zh: "香港" },
    coordinates: [114.1694, 22.3193],
    team: {
      en: ["Wu Zhong", "Cermain Cheung", "Terence Siu"],
      zh: ["吴总", "张颖", "Terence Siu"]
    },
    markerOffset: 15,
    expertise: ["Cross-border Legal", "Digital Transformation"]
  },
  {
    id: "china",
    name: { en: "China", zh: "中国" },
    coordinates: [116.4074, 39.9042],
    team: {
      en: ["Thomas Sim", "Cermain Cheung"],
      zh: ["Thomas Sim", "张颖"]
    },
    markerOffset: -15,
    expertise: ["Operational Excellence", "Cross-border Legal"]
  }
];

// Define expertise with icons and positions - arranged in a fixed grid layout
const expertiseAreas = [
  // Top row - evenly spaced
  {
    id: "logistics",
    name: { en: "Logistics", zh: "物流" },
    icon: Building,
    position: { x: 20, y: 10 }
  },
  {
    id: "tech",
    name: { en: "Technology", zh: "技术" },
    icon: Network,
    position: { x: 50, y: 10 }
  },
  {
    id: "digital",
    name: { en: "Digital", zh: "数字化" },
    icon: Network,
    position: { x: 80, y: 10 }
  },

  // Bottom row - evenly spaced (moved up a bit)
  {
    id: "investment",
    name: { en: "Investment", zh: "投资" },
    icon: Globe,
    position: { x: 20, y: 85 }
  },
  {
    id: "legal",
    name: { en: "Legal", zh: "法律" },
    icon: Briefcase,
    position: { x: 50, y: 85 }
  },
  {
    id: "operations",
    name: { en: "Operations", zh: "运营" },
    icon: Map,
    position: { x: 80, y: 85 }
  }
];

// Create connection lines between locations
const connectionLines = [
  { from: "singapore", to: "japan" },
  { from: "singapore", to: "hongKong" },
  { from: "singapore", to: "china" },
  { from: "hongKong", to: "japan" },
  { from: "hongKong", to: "china" },
  { from: "china", to: "japan" }
];

const GlobalConnections: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  const handleLocationHover = (location: string | null) => {
    setHoveredLocation(location);
  };

  // Translation mapping
  const translations = {
    en: {
      title: "Our Global Network",
      subtitle: "Connecting Asia's Key Markets",
      singapore: "Singapore",
      japan: "Japan",
      hongKong: "Hong Kong",
      china: "China",
      strengthLogistics: "Logistics Expertise",
      strengthTech: "Technology Integration",
      strengthLegal: "Cross-border Legal",
      strengthOperations: "Operational Excellence",
      strengthInvestment: "Investment Strategy",
      strengthDigital: "Digital Transformation",
      teamMembers: "Team Members",
      clickToSeeTeam: "Click to see team members",
      backToMap: "Back to map"
    },
    zh: {
      title: "我们的全球网络",
      subtitle: "连接亚洲主要市场",
      singapore: "新加坡",
      japan: "日本",
      hongKong: "香港",
      china: "中国",
      strengthLogistics: "物流专业知识",
      strengthTech: "技术集成",
      strengthLegal: "跨境法律",
      strengthOperations: "卓越运营",
      strengthInvestment: "投资策略",
      strengthDigital: "数字化转型",
      teamMembers: "团队成员",
      clickToSeeTeam: "点击查看团队成员",
      backToMap: "返回地图"
    }
  };

  return (
    <section className="py-20 bg-investment-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-investment-navy">
            {language === 'en' ? translations.en.title : translations.zh.title}
          </h2>
          <p className="text-xl text-investment-slate">
            {language === 'en' ? translations.en.subtitle : translations.zh.subtitle}
          </p>
        </div>

        <div className="relative w-full h-[600px] bg-investment-navy rounded-lg shadow-xl overflow-hidden">
          {/* Map Background with semi-transparent overlay - darker for better contrast with country outlines */}
          <div className="absolute inset-0 bg-gradient-to-br from-black to-investment-navy/90"></div>

          {/* Interactive Map */}
          <div className="absolute inset-0">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 600, // Reduced scale to show more of the map
                center: [105, 20] // Adjusted center to better show all relevant countries
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup zoom={1} maxZoom={3} minZoom={1} center={[0, 0]}>
                {/* Countries */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      // Highlight countries in our network
                      const isHighlighted = ["CHN", "JPN", "SGP", "HKG"].includes(geo.id);
                      // Filter to only show Asian countries to reduce clutter
                      const isAsian = [
                        "CHN", "JPN", "KOR", "PRK", "MNG", "RUS", "KAZ", "UZB", "TKM", "AFG",
                        "PAK", "IND", "NPL", "BTN", "BGD", "LKA", "MDV", "MMR", "THA", "LAO",
                        "VNM", "KHM", "MYS", "BRN", "SGP", "IDN", "TLS", "PHL", "TWN", "HKG", "MAC"
                      ].includes(geo.id);

                      if (!isAsian) return null;

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isHighlighted ? "#1e3a8a" : "#2a4a8a"}
                          stroke="#ffffff"
                          strokeWidth={isHighlighted ? 1.5 : 1}
                          style={{
                            default: {
                              fill: isHighlighted ? "#1e3a8a" : "#2a4a8a",
                              stroke: "#ffffff",
                              strokeWidth: isHighlighted ? 1.5 : 1,
                              outline: "none",
                              opacity: isHighlighted ? 0.9 : 0.5
                            },
                            hover: {
                              fill: "#C5AA6A",
                              stroke: "#ffffff",
                              strokeWidth: 2,
                              outline: "none",
                              opacity: 0.9
                            }
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Connection Lines */}
                {connectionLines.map((connection) => {
                  const source = locations.find(loc => loc.id === connection.from);
                  const target = locations.find(loc => loc.id === connection.to);

                  if (!source || !target) return null;

                  const isHighlighted =
                    hoveredLocation === connection.from ||
                    hoveredLocation === connection.to;

                  return (
                    <Line
                      key={`${connection.from}-${connection.to}`}
                      from={source.coordinates}
                      to={target.coordinates}
                      stroke="#C5AA6A"
                      strokeWidth={isHighlighted ? 2 : 1}
                      strokeDasharray="5,5"
                      strokeLinecap="round"
                      className={isHighlighted ? "animate-pulse" : ""}
                      style={{
                        opacity: isHighlighted ? 0.9 : 0.6
                      }}
                    />
                  );
                })}

                {/* Location Markers */}
                {locations.map((location) => {
                  const isActive = hoveredLocation === location.id || selectedLocation === location.id;

                  return (
                    <Marker
                      key={location.id}
                      coordinates={location.coordinates}
                      onClick={() => handleLocationClick(location.id)}
                      onMouseEnter={() => handleLocationHover(location.id)}
                      onMouseLeave={() => handleLocationHover(null)}
                    >
                      <g className="cursor-pointer">
                        {/* Pulse Animation for Active Marker */}
                        {isActive && (
                          <circle
                            r={12}
                            fill="#C5AA6A"
                            opacity={0.4}
                            className="animate-ping"
                          />
                        )}

                        {/* Marker Circle */}
                        <circle
                          r={6}
                          fill={isActive ? "#C5AA6A" : "#C5AA6A"}
                          stroke="#fff"
                          strokeWidth={isActive ? 2 : 1}
                          className={isActive ? "animate-pulse" : ""}
                        />

                        {/* Location Label */}
                        <text
                          textAnchor="middle"
                          y={location.markerOffset}
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fill: "#fff",
                            fontSize: "10px",
                            fontWeight: "bold",
                            textShadow: "0px 0px 3px rgba(0,0,0,0.5)"
                          }}
                        >
                          {language === 'en' ? location.name.en : location.name.zh}
                        </text>
                      </g>
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {/* Expertise Bubbles */}
          <div className="absolute inset-0 pointer-events-none">
            {expertiseAreas.map((expertise, index) => (
              <div
                key={expertise.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in-delay-${(index % 5) + 1} group pointer-events-auto`}
                style={{
                  left: `${expertise.position.x}%`,
                  top: `${expertise.position.y}%`
                }}
              >
                {/* Unified style for all expertise bubbles */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/80 p-2 rounded-full shadow-md group-hover:bg-white group-hover:shadow-lg transition-all">
                    {React.createElement(expertise.icon, { className: "h-5 w-5 text-investment-navy" })}
                  </div>
                  <div className="mt-1 bg-white/80 px-3 py-1 rounded-md text-center text-xs font-medium text-investment-navy min-w-[60px] group-hover:bg-white transition-all">
                    {language === 'en' ? expertise.name.en : expertise.name.zh}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Caption removed to avoid blocking expertise buttons */}
        </div>

        {/* Location Team Dialog */}
        <Dialog open={!!selectedLocation} onOpenChange={(open) => !open && setSelectedLocation(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-investment-navy">
                {selectedLocation && locations.find(loc => loc.id === selectedLocation)?.name[language]}
              </DialogTitle>
              <DialogDescription>
                {language === 'en' ? translations.en.teamMembers : translations.zh.teamMembers}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="font-medium text-investment-navy mb-2">
                {language === 'en' ? "Team Members" : "团队成员"}
              </h4>
              <div className="space-y-3 mb-4">
                {selectedLocation && locations.find(loc => loc.id === selectedLocation)?.team[language].map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-investment-light-gray rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-investment-navy text-white flex items-center justify-center text-lg font-serif">
                      {member.charAt(0)}
                    </div>
                    <span className="font-medium">{member}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-medium text-investment-navy mb-2">
                {language === 'en' ? "Key Expertise" : "核心专长"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLocation && locations.find(loc => loc.id === selectedLocation)?.expertise.map((exp, index) => (
                  <span key={index} className="px-3 py-1 bg-investment-gold/20 text-investment-navy rounded-full text-sm">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GlobalConnections;
