import styles from "./test.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import type { JSX } from "react";
import type { InferType } from "yup";
import type { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";


type FormValues = InferType<typeof schema>;

const Submitform = (): JSX.Element => {
    const schema = yup.object().shape({
        name: yup.string().required("فیلد نام اجباری است"),
        email: yup.string().email("ایمیل نامعتبر است").required("وارد کردن ایمیل اجباری است"),
        age: yup.number().positive().min(18).max(100).required(),
        password: yup.string().min(4).max(15).matches(/[a-z]+/, "رمز باید شامل یک حرف کوچک انگلیسی باشد").matches(/[A-Z]+/, " رمز باید شامل یک حرف بزرگ انگلیسی باشد").matches(/\d+/).required(),///regular expression(regex)  برای اجباری بودن حرف بزرگ و کوچیک یا کاراکتر خاص 
        confrimpassword: yup.string().oneOf([yup.ref("password")], "مقدار وارد شده با پسورد اصلی مطابقت ندارد").required(),
    });


    const { handleSubmit: submit, register, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const onSubmitForm: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    };

    return (
        <div >
            <form action="" onSubmit={submit(onSubmitForm)} className={styles.flex}>
                <input type="text" placeholder="name..." {...register("name")} />
                {errors.name && (<p>{errors.name?.message}</p>)}
                <input type="email" placeholder="email..." {...register("email")} />
                {errors.email && (<p>{errors.email?.message}</p>)}
                <input type="number" placeholder="age..." {...register("age")} />
                {errors.age && (<p>{errors.age?.message}</p>)}
                <input type="password" placeholder="password..." {...register("password")} />
                {errors.password && (<p>{errors.password?.message}</p>)}
                <input type="password" placeholder="confrim password..." {...register("confrimpassword")} />
                {errors.confrimpassword && (<p>{errors.confrimpassword?.message}</p>)}
                <input type="submit" />
            </form>
        </div>
    )

}

export default Submitform