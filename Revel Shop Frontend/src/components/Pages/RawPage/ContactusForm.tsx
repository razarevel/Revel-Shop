import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  message: z.string().min(1),
  number: z.number(),
});
type FormData = z.infer<typeof schema>;
export default function ContactusForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container mx-auto max-w-7xl pt-6 pb-24 px-4">
      <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* firstName */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Please Enter your Name"
          />
        </div>
        {/* email */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Please Enter your Email"
          />
        </div>
        {/* phone */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="number" className="text-lg font-medium">
            Phone
          </label>
          <input
            {...register("number", { valueAsNumber: true })}
            type="number"
            name="number"
            id="number"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80 remove-arrow"
            placeholder="Please Enter your Number"
          />
        </div>
        {/* Message */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="message" className="text-lg font-medium">
            Message
          </label>
          <textarea
            {...register("message")}
            name="message"
            id="message"
            rows={5}
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Enter Your Message here"
          ></textarea>
        </div>
        <button
          disabled={!isValid}
          className={
            `flex items-center justify-center space-x-3 font-medium px-4 py-2 border border-black  ` +
            (isValid
              ? " hover:bg-black hover:text-white duration-300 group opacity-100 "
              : "opacity-40")
          }
        >
          {/* svg */}
          <svg
            className="group-hover:fill-white duration-300"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="40px"
            viewBox="0 0 96.264 96.264"
          >
            <g>
              <path
                d="M94.264,17.132H2c-1.104,0-2,0.896-2,2v58c0,1.104,0.896,2,2,2h92.264c1.104,0,2-0.896,2-2v-58
		C96.264,18.028,95.367,17.132,94.264,17.132z M90.929,34.825c0,0.548-0.299,1.052-0.778,1.315l-41.29,22.61
		c-0.225,0.123-0.473,0.185-0.721,0.185s-0.496-0.062-0.721-0.184L6.115,36.141c-0.481-0.263-0.78-0.768-0.78-1.316v-7.55
		c0-0.525,0.274-1.011,0.724-1.283c0.447-0.271,1.008-0.29,1.472-0.046l39.684,20.762c0.552,0.29,1.301,0.289,1.855-0.001
		l39.664-20.76c0.463-0.244,1.021-0.226,1.472,0.046c0.448,0.272,0.724,0.758,0.724,1.283L90.929,34.825L90.929,34.825z"
              />
            </g>
          </svg>
          <p>Send Message</p>
        </button>
      </form>
    </div>
  );
}
