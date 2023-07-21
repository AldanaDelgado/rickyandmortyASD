// import { useState } from "react";
// import validation from "../Validation/Validation";
// import style from "./Form.module.css";

// const Form = ({Login}) => {
//     const [errors, setErrors] = useState({});
//     const [userData, setUserData] = useState({
//         email: '',
//         password: ''

//     });

//     const handleChange= (event) => {
//         setUserData({
//             ...userData,
//             [event.target.name]: event.target.value
//         })
//         setErrors(validation({
//             ...userData,
//             [event.target.name]: event.target.value
//         }))
//     }

//     const handleSubmit= (event) => {
//         event.preventDefault();
//         Login(userData);
//     }

//     return (
//         // <form  className={style.form} onSubmit = {handleSubmit}>
//         //     <label htmlFor="email" style={{color: "red"}}>Email:</label>
//         //     <input type="text"name='email' value={userData.email} 
//         //     onChange={handleChange}/>
//         //     {errors.email && <p style={{ color: "black"}}>{errors.email}</p>}
//         //     <hr />
//         //     <label htmlFor="password"style={{ color: "red"}}>Password:</label>
//         //     <input type="text" name='password' value={userData.password} 
//         //     onChange={handleChange}/>
//         //     {errors.password && <p className={style.errorMessage} style={{ color: "black"}}>{errors.password}</p>}
//         //     <button className={style.button}>Submit</button>
//         //     </form>

//         <div className={style.formDiv}>
//         <div className={style.formImage}></div>
//         <form className={style.formContainer} onSubmit={handleSubmit}>
//           <div className={style.formTitle}>Welcome to Rick and Morty App</div>
//           <label htmlFor="username">Username:</label>
//           <input
//             placeholder="Username"
//             type="text"
//             name="username"
//             value={userData.username}
//             onChange={handleInputChange}
//             className={errors.username ? style.errorInput : ""}
//           />
//           {errors.username && <p className={style.error}>{errors.username}</p>}
  
//           <label htmlFor="password">Password:</label>
//           <input
//             placeholder="Password"
//             type="password"
//             name="password"
//             value={userData.password}
//             onChange={handleInputChange}
//             className={errors.password ? style.errorInput : ""}
//           />
//           {errors.password && <p className={style.error}>{errors.password}</p>}
  
//           <hr />
//           <button type="submit" className={style.buttonForm}>
//             LOGIN
//           </button>
//         </form>
//       </div>


import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css";

const Form = ({ Login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(userData);
  };

  return (
    <div className={style.formDiv}>
      <div className={style.formImage}></div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.formTitle}>Welcome to Rick and Morty App</div>
        <label htmlFor="email" style={{ color: "red" }}>
          Email:
        </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "black" }}>{errors.email}</p>}
        <hr />
        <label htmlFor="password" style={{ color: "red" }}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className={style.errorMessage} style={{ color: "black" }}>
            {errors.password}
          </p>
        )}
        <button className={style.button}>Submit</button>
      </form>
    </div>
  );
};

export default Form;








