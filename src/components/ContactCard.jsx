function ContactCard({ label, href, children }) {
  return (
    <div className="contact-card">
      <h3>{label}</h3>
      <a href={href}>{children}</a>
    </div>
  );
}

export default ContactCard;
