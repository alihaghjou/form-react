import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const zod = z.object({
  email: z.string().email({ message: "Enter a valid Email" }),
  firstName: z
    .string()
    .min(2, { message: "Must contain at least 2 character" }),
  lastName: z.string().min(2, { message: "Must contain at least 2 character" }),
  password: z
    .string()
    .min(8, { message: "Must contain at least 8 character" })
    .regex(/[a-z]/, { message: "Must Contain a Lowercase" })
    .regex(/[A-Z]/, { message: "Must Contain an UpperCase" })
    .regex(/[0-9]/, { message: "Must Contain a Number" }),
});

type FormData = z.infer<typeof zod>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zod),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-8 gap-6 w-full"
    >
      <div>
        <label htmlFor="Email">Email Input:</label>
        <input {...register("email")} id="Email" type="text" />
        <p className="errorMessage">{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="First Name">First Input:</label>
        <input {...register("firstName")} id="First Name" type="text" />
        <p className="errorMessage">{errors.firstName?.message}</p>
      </div>
      <div>
        <label htmlFor="Last Name">Last Input:</label>
        <input {...register("lastName")} id="Last Name" type="text" />
        <p className="errorMessage">{errors.lastName?.message}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input {...register("password")} id="password" type="password" />
        <p className="errorMessage">{errors.password?.message}</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="py-4 text-xl px-6 border-2 rounded border-slate-200 hover:text-slate-800 hover:bg-slate-200"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
