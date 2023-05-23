import { useState } from "react";
export function Home() {
  const [PersonalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    birthday: "",
    gender: "male | female | other | prefer not to mention",
    email: "",
    checkbox: "",
  });
  return (
    <>
      <section>
        <form>
          <label htmlFor="name">{PersonalData.name}</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="lastname">{PersonalData.name}</label>
          <input type="text" name="lastname" id="lastname" />
          <label htmlFor="birthday">{PersonalData.birthday}</label>
          <input type="date" id="birthday" name="birthday" value="" />
          <fieldset>
            <legend>Select your gender:</legend>
            <label htmlFor="name">{PersonalData.gender}</label>
            <input type="radio" id="name" name="gender" value="male" />
            <input type="radio" id="name" name="gender" value="female" />
            <input type="radio" id="name" name="gender" value="other" />
            <input
              type="radio"
              id="name"
              name="gender"
              value="prefer not to mention"
            />
          </fieldset>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            id="email"
            pattern="ajs@gmail.com"
            value={PersonalData.email}
            required
          ></input>
          <legend>Do you want to receives our newsletter?</legend>
          <input type="checkbox" id="newsletter" name="newsletter" />
          <input type="checkbox" id="newsletter" name="newsletter" />
          <label htmlFor="scales">{PersonalData.checkbox}</label>
          <label htmlFor="scales">{PersonalData.checkbox}</label>
        </form>
      </section>
      <button onClick={() => setPersonalData(PersonalData)}></button>
    </>
  );
}
