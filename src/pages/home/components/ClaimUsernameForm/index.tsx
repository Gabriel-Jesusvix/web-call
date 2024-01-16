import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ClaimUsernameFormSchema, ClaimUsernameFormData } from "@/utils/validation/ClaimUsernameSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";




export function ClaimUsernameForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema)
  })
  const router = useRouter()
  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data
    await router.push(`/register?username=${username}`)
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
          disabled={isSubmitting}
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