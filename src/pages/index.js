import React from "react";
import Layout from "../components/Layout";
import "../assets/styles.css"; // Update path if needed

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url(/hero.jpg)", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Empowering Youth Mental Health
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
          The Sam Sees Foundation supports teens by providing access to therapy,
          education, and hope.
        </p>
        <a
          href="/donate"
          style={{
            marginTop: "20px",
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Donate Now
        </a>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Our Mission</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          We provide mental health resources, therapy scholarships, and community
          outreach to support teens across the country.
        </p>
      </section>

      {/* Get Involved Section */}
      <section
        style={{
          backgroundColor: "#f9f9f9",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>How You Can Help</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
          <div style={{ width: "300px" }}>
            <h3>Volunteer</h3>
            <p>Become a local or virtual volunteer and help drive impact.</p>
          </div>
          <div style={{ width: "300px" }}>
            <h3>Partner</h3>
            <p>We're always looking for brands and schools to collaborate with.</p>
          </div>
          <div style={{ width: "300px" }}>
            <h3>Donate</h3>
            <p>Every $25 funds one teen’s first therapy session.</p>
          </div>
        </div>
      </section>

      {/* Footer handled by Layout */}
    </Layout>
  );
}
