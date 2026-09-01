"use client";

import { useState } from "react";

const awards = [
  {
    image: "/images/awards/award-1.jpg",
    title: "CME Programme – Invited Speaker",
    year: "2025",
    Recognition: "Invited Speaker for “Azoospermia Management",
    awardedBy: " Indian Medical Association (IMA) – Thoothukudi Branch",
    achievement:
      " Invited as a speaker to deliver an expert session on Azoospermia Management at the CME Programme held on 1st November 2025 at Hotel DSF Plaza, Thoothukudi.",
  },
  {
    image: "/images/awards/award-2.jpg",
    title: "Award & Achievement 2",
    year: "2000-2025",
    Recognition: "25th Silver Jubilee Celebration",
    awardedBy: "Sankar Ponnar HR Sec School & Sankar Ponnar Global Campus",
    achievement:
      "Honoured as part of the 25th Silver Jubilee celebration of Sankar Ponnar HR Sec School & Sankar Ponnar Global Campus, commemorating 25 years of educational excellence and dedicated service.",
  },
  {
    image: "/images/awards/award-3.jpg",
    title: "Best Service Award",
    year: "2023",
    Recognition: "Best Service Award",
    awardedBy: "Indian Medical Association – Palani, Oddanchatram & Madurai Meenakshi Branches, in association with Meenakshi Mission Hospital & Research Centre",
    achievement:
      "Honoured with the Best Service Award in recognition of dedicated service and contribution to the medical profession and patient care.",

  },
  {
    image: "/images/awards/award-4.jpg",
    title: "2008th Child Birth – Special Achievement",
    year: "2008",
    Recognition: "Recognition for achieving the birth of the 2008th child",
    awardedBy: "Iswarya Women Care & Fertility Centre, Palani",
    achievement:
      "Honoured for the successful achievement of the birth of the 2008th child, commemorated during a special celebration held at Iswarya Women Care & Fertility Centre, Palani, on 11th May 2008."
  },

  {
    image: "/images/awards/award-5.jpg",
    title: "Ungalukkum Oru Kuzhandhai” – Fertility Awareness Recognition",
    Recognition: "Recognition for contribution towards fertility awareness and helping couples understand fertility and parenthood",
    awardedBy: "Tamil Nadu Governor – K. Rosaiah",
    achievement:
      " Honoured for contributing to fertility awareness through educational efforts aimed at helping couples understand fertility, treatment and the journey towards parenthood.",

  },
];

export default function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<
    (typeof awards)[number] | null
  >(null);

  return (
    <section
        id="awards"
      style={{
        width: "100%",
        padding: "80px 0",
        background: "#f8fafc",
        overflow: "hidden",
        scrollMarginTop: "100px",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          textAlign: "center",
          padding: "0 20px",
          marginBottom: "45px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#0891b2",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Awards & Achievements
        </p>

        <h2
          style={{
            margin: "10px 0",
            color: "#1f2937",
            fontSize: "38px",
            fontWeight: 700,
          }}
        >
          Our Achievements
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "auto",
            color: "#64748b",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          Celebrating our achievements and recognition for excellence
          in healthcare.
        </p>
      </div>

      {/* ================================================= */}
      {/* HORIZONTAL RUNNING AREA */}
      {/* ================================================= */}

      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "max-content",
            alignItems: "stretch",
            animation: "awardRunning 25s linear infinite",
          }}
        >
          {/* FIRST 5 CARDS */}

          {awards.map((award, index) => (
            <div
              key={`first-${index}`}
              style={{
                position: "relative",
                flex: "0 0 350px",
                width: "350px",
                height: "380px",
                marginRight: "24px",
                overflow: "hidden",
                borderRadius: "18px",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={award.image}
                alt={award.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.25), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {award.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setSelectedAward(award)}
                  style={{
                    marginTop: "12px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "50px",
                    background: "#fff",
                    color: "#0891b2",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Explore Achievement
                </button>
              </div>
            </div>
          ))}

          {/* DUPLICATE 5 CARDS */}

          {awards.map((award, index) => (
            <div
              key={`second-${index}`}
              style={{
                position: "relative",
                flex: "0 0 350px",
                width: "350px",
                height: "380px",
                marginRight: "24px",
                overflow: "hidden",
                borderRadius: "18px",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={award.image}
                alt={award.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.25), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {award.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setSelectedAward(award)}
                  style={{
                    marginTop: "12px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "50px",
                    background: "#fff",
                    color: "#0891b2",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Explore Achievement
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* POPUP */}
      {/* ================================================= */}

      {selectedAward && (
        <div
          onClick={() => setSelectedAward(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(0,0,0,.75)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "700px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "20px",
              background: "#fff",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                zIndex: 5,
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: "50%",
                background: "rgba(0,0,0,.7)",
                color: "#fff",
                fontSize: "26px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <img
              src={selectedAward.image}
              alt={selectedAward.title}
              style={{
                display: "block",
                width: "100%",
                height: "330px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "30px" }}>
              <p
                style={{
                  margin: 0,
                  color: "#0891b2",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Achievement Details
              </p>

              <h2
                style={{
                  margin: "8px 0 25px",
                  color: "#1f2937",
                  fontSize: "28px",
                }}
              >
                {selectedAward.title}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                  }}
                >
                  <small>Awarded In</small>
                  <strong style={{ display: "block", marginTop: "5px" }}>
                    {selectedAward.year ?? "N/A"}
                  </strong>
                </div>

                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                  }}
                >
                  <small>Awarded By</small>
                  <strong style={{ display: "block", marginTop: "5px" }}>
                    {selectedAward.awardedBy}
                  </strong>
                </div>
              </div>

              <div style={{ marginTop: "22px" }}>
                <small>Achievement</small>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                  }}
                >
                  {selectedAward.achievement}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}

      <style jsx>{`

        @keyframes awardRunning {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        div:hover > div[style*="awardRunning"] {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 0 !important;
          }
        }

      `}</style>
    </section>
  );
}