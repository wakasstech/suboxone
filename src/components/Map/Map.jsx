
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { geoAlbersUsa } from "d3-geo";
import { geoCentroid } from "d3-geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const projection = geoAlbersUsa();

const stateOffsets = {
  "Rhode Island": [10, 5],
  "Delaware": [5, 5],
  "Connecticut": [5, 5],
  "New Jersey": [5, 5],
  "Massachusetts": [5, -5],
  "Vermont": [5, -5],
  "New Hampshire": [5, -5],
  "Maryland": [5, 5],
  "District of Columbia": [5, 5],
};

const USAStatesMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  return (
    <div style={{ position: "relative" }}>
      <ComposableMap
        projection="geoAlbersUsa"
        width={800}
        height={500}
        style={{ background: "#fff" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              let centroid = projection(geoCentroid(geo));

              if (!Array.isArray(centroid) || centroid.length !== 2) return null;

              const offset = stateOffsets[stateName] || [0, 0];

              return (
                <g key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    onMouseEnter={(event) => {
                      setHoveredState(stateName);
                      setHoverPosition({ x: event.clientX, y: event.clientY });
                    }}
                    onMouseMove={(event) => {
                      setHoverPosition({ x: event.clientX, y: event.clientY });
                    }}
                    onMouseLeave={() => setHoveredState(null)}
                    style={{
                        default: { fill: "#49C7AB", outline: "none" },
                                              hover: { fill: "#f38a73 ", outline: "none" },
                                              pressed: { fill: "#f38a73 ", outline: "none" },
                    }}
                  />

                  <text
                    x={centroid[0] + offset[0]}
                    y={centroid[1] + offset[1]}
                    textAnchor="middle"
                    fill="black"
                    fontSize="8"
                    fontWeight="bold"
                    style={{
                      pointerEvents: "none",
                      dominantBaseline: "middle",
                    }}
                  >
                    {stateName}
                  </text>
                </g>
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hoveredState && (
        <div
          style={{
            position: "absolute",
            top: hoverPosition.y + 10,
            left: hoverPosition.x + 10,
            background: "black",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "14px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {hoveredState}
        </div>
      )}
    </div>
  );
};

export default USAStatesMap;
