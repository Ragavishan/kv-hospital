export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-xl">
      <iframe
        title="KV Hospital Location"
        src="https://www.google.com/maps?q=KV+Hospital,+Dindigul+Road,+Laxmipuram,+Palani,+Tamil+Nadu+624601&output=embed"
        width="100%"
        height="500"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
}