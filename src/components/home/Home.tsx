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
        </form>
      </section>
    </>
  );
}
