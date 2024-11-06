import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { Search } from "./SimpleSearch/Search";

type Input = {
  phrase: string;
};

function App() {
  const { register, handleSubmit } = useForm<Input>();

  const [phrase, setPhrase] = useState("");

  const onSubmit: SubmitHandler<Input> = (data) => {
    setPhrase("");
    setPhrase(data.phrase);
  };

  return (
    <>
      <h1>Vector search demo</h1>
      <p>Search for a movie by a phrase</p>
      {phrase && <Search phrase={phrase} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("phrase")} />
        <input type="submit" value="Search by phrase" />
      </form>
    </>
  );
}

export default App;
