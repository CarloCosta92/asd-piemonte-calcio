import ContactForm from "../components/form/ContactForm";
import { contactInfo, staff } from "../data/mockData";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-main)">
      {/* Header */}
      <section className="py-12 text-white bg-linear-to-r from-(--color-primary) to-(--color-primary-light)">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contattaci</h1>
          <p>Siamo sempre disponibili per rispondere alle tue domande</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-(--color-text-main)">
                Informazioni di contatto
              </h2>

              {[
                { Icon: Phone, label: "Telefono", value: contactInfo.phone },
                { Icon: Mail, label: "Email", value: contactInfo.email },
                { Icon: MapPin, label: "Sede", value: contactInfo.address },
                {
                  Icon: Clock,
                  label: "Orari",
                  value: `${contactInfo.hours.weekday}, ${contactInfo.hours.saturday}, ${contactInfo.hours.sunday}`,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg shadow hover:shadow-lg transition bg-(--color-bg-card)"
                >
                  <div className="flex items-start gap-4">
                    <item.Icon className="shrink-0 mt-1 text-(--color-primary)" />
                    <div>
                      <h3 className="font-bold mb-1 text-(--color-text-main)">
                        {item.label}
                      </h3>
                      <p className="text-(--color-text-muted)">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="p-8 rounded-lg shadow bg-(--color-bg-card)">
              <h2 className="text-3xl font-bold mb-8 text-(--color-text-main)">
                Inviaci un messaggio
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-(--color-text-main)">
            Il nostro staff
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {staff.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-lg text-center hover:bg-(--color-primary-light)/10 transition bg-(--color-bg-main)"
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl bg-linear-to-br from-(--color-primary-light) to-(--color-primary) text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold mb-1 text-(--color-text-main)">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-2 text-(--color-primary)">
                  {member.role}
                </p>
                <p className="text-xs text-(--color-text-muted)">
                  Dal {member.since}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
