import { FormEvent, useState } from "react";

interface Book {
  name: string;
  title: string;
  description: string;
}

export default function NewBookSubmit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setTitle("");
    setDescription("");
    setName("");

    //post data to DB
  };

  return (
    <form className="flex flex-col p-3 bg-silver-700 mb-5 space-y-5 rounded-lg">
      <p>{title}</p>
      <input
        className="text-black p-3 font-serif text-lg rounded-md placeholder:text-black bg-silver-500"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        className="text-black p-3 font-serif text-lg rounded-md placeholder:text-black bg-silver-500"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        className="text-black p-3 font-serif text-lg rounded-md placeholder:text-black bg-silver-500"
        type="text"
        placeholder="Name "
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="flex justify-center w-full">
        <input
          className="text-black bg-silver-400 rounded-lg font-serif text-2xl w-fit px-9"
          type="submit"
          onClick={() => {
            handleSubmit;
          }}
        ></input>
      </div>
    </form>
  );
}
