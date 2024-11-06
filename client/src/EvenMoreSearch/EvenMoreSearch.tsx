import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Search } from "./Search";

type Input = {
  phrase: string;
};

export const EvenMoreSearch = () => {
  const { register, handleSubmit } = useForm<Input>();

  const [phrase, setPhrase] = useState("");

  const onSubmit: SubmitHandler<Input> = (data) => {
    setPhrase("");
    setPhrase(data.phrase);
  };

  return (
    <div>
      <h2>Search for a movie by a phrase</h2>
      {phrase && <Search phrase={phrase} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("phrase")} />
        <input type="submit" value="Search by phrase" />
      </form>
    </div>
  );
};
