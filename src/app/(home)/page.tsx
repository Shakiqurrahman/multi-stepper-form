import Form from "@/components/Form";

export default function Home() {
  return (
    <section className="max-w-[800px] mx-auto p-4 font-poppins">
      <h1 className="text-2xl mt-10 sm:text-3xl font-black uppercase text-center text-blue-400">
        Multi-Step Form
      </h1>
      <Form />
    </section>
  );
}
