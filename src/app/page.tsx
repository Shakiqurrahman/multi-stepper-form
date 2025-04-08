import Form from "@/components/Form";

export default function Home() {
  return (
    <section className="max-w-[800px] mx-auto font-poppins">
      <h1 className="text-3xl font-black uppercase text-center mt-10 text-blue-400">
        Multi-Step Form
      </h1>
      <Form />
    </section>
  );
}
