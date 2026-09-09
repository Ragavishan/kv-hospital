export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-xl">
      <iframe
        title="Iswarya Hospital Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.6577124019004!2d77.52208737709118!3d10.448712565148824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de64554a1361%3A0x25be8197119868a2!2sKV%20Hospital!5e0!3m2!1sen!2sin!4v1788931709943!5m2!1sen!2sin"
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