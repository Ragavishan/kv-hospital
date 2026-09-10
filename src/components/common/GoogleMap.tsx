export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-xl">
      <iframe
        title="Iswarya Hospital Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7847.316868911662!2d77.52207311046988!3d10.448655389637869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df00689d32fb%3A0x76a3b3c5273251ac!2sIswarya%20Hospital%20-%20Palani!5e0!3m2!1sen!2sin!4v1789031074434!5m2!1sen!2sin"
        width="100%"
        height="500"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="border-0"
      />
    </div>
  );
}