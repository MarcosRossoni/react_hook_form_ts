import {useForm} from "react-hook-form";
import {formSchema, FormSchema} from "../schemas/formSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";

export const userForms = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    })

    return { register, handleSubmit, errors}
}