import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ClaimUsernameFormSchema, ClaimUsernameFormData} from "@/utils/validation/ClaimUsernameSchema";
import { zodResolver } from "@hookform/resolvers/zod";




export function ClaimUsernameForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema)
  })

  async function handleClaimUsername(data: any) {
    console.log(data)
  }
  return (
    <>
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput 
        size="sm"
        prefix="agendamentos.com/"
        placeholder="seu-usuario"
        {...register('username')}
        />
      <Button 
        size="sm"
        type="submit"
        >
        Reservar
        <ArrowRight />
      </Button>
     
    </Form>
    <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Digite o nome do usuário'}
        </Text>
      </FormAnnotation>
   
    </>
  )
}