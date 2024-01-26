import ContactSecForm from "./ContactSecForm";

export default function ContactSection() {
  const context = [
    {
      id: 1,
      sections: [
        {
          heading: "Store Location",
          text: "Sunny Walley Beach, Fl 12313 Japan",
        },
        {
          heading: "Phone",
          text: "03071887522",
        },
        {
          heading: "Office Location",
          text: "North Tokyo Japan",
        },
      ],
    },
    {
      id: 2,
      sections: [
        {
          heading: "Work Hours",
          text: "07:30 AM - 9:30PM Daily",
        },
        {
          heading: "Email",
          text: "razarevel@gmail.com",
        },
        {
          heading: "Social Media",
          text: "Facebook, Instagram, LinkedIn, Twitter",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 space-y-10 md:flex-row md:items-start container mx-auto max-w-7xl">
        <div className="px-4 space-y-3 md:w-[80%] lg:w-[70%]">
          <h1 className="text-4xl font-bold max-w-[43rem] w-full">
            By Subscribing To Our Newsletter You Can Get 30% Off
          </h1>
          <p className="font-medium italic opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            facere.
          </p>
          {/* form */}
          <ContactSecForm />
        </div>
        <div className="flex items-start justify-between ">
          {context.map((el) => (
            <div className="space-y-6" key={el.id}>
              {el.sections.map((el, index) => (
                <div key={index}>
                  {" "}
                  <h1 className="font-bold">{el.heading}:</h1>
                  <p className="opacity-50 font-medium max-w-[13rem] w-full">
                    {el.text}
                  </p>{" "}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
