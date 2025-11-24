"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { NavBar } from "@/components/dashboard/navbar";

type PerfilForm = {
  nome: string;
  dataNascimento: string;
  altura: string;
  peso: string;
  objetivo: string;
};

const DashboardPerfil = () => {
  const [editando, setEditando] = useState(false);
  const [sucesso, setSucesso] = useState<string | undefined>();
  const user = useCurrentUser();
  const [carregando, setCarregando] = useState(true);

  const form = useForm<PerfilForm>({
    defaultValues: {
      nome: "",
      dataNascimento: "",
      altura: "",
      peso: "",
      objetivo: "",
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    if (user) {
      form.reset({
        nome: user.name || "",
        dataNascimento: user.dataNascimento || "",
        altura: user.altura?.toString() || "",
        peso: user.peso?.toString() || "",
        objetivo: user.objetivo || "",
      });
      setCarregando(false);
    }
  }, [user, form]);

  const handleAlturaInput = (value: string) => {
    let val = value.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if (parts.length > 2) val = parts[0] + "." + parts[1];
    if (parts[1]?.length > 2) val = parts[0] + "." + parts[1].slice(0, 2);
    if (val.startsWith(".")) val = "0" + val;
    if (parseFloat(val) > 2.5) val = "2.50";
    return val;
  };

  const handlePesoInput = (value: string) => {
    let val = value.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if (parts.length > 2) val = parts[0] + "." + parts[1];
    if (parts[1]?.length > 2) val = parts[0] + "." + parts[1].slice(0, 2);
    return val;
  };

  const onSubmit = async (values: PerfilForm) => {
    try {
      const payload = {
        ...values,
        altura: parseFloat(values.altura),
        peso: parseFloat(values.peso),
        userId: user?.id,
      };

      await fetch("/api/perfil", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setSucesso("Perfil atualizado com sucesso!");
      setEditando(false);
    } catch (err) {
      console.error(err);
      setSucesso("Erro ao atualizar o perfil.");
    }
  };

  if (carregando) return <p className="flex justify-center items-center">Carregando...</p>;

  return (
    <div className="flex justify-center items-center mt-2">
      <Card className="w-[600px] bg-secondary">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            {editando ? "Editar Perfil" : "Meu Perfil"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="nome"
                rules={{ required: "Nome é obrigatório" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!editando} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataNascimento"
                rules={{
                  required: "Data de nascimento é obrigatória",
                  validate: (value) => {
                    const hoje = new Date();
                    const data = new Date(value);
                    return (
                      data <= hoje || "Data de nascimento não pode ser futura"
                    );
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <FormControl>
                      <Input {...field} type="date" disabled={!editando} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="altura"
                rules={{
                  required: "Altura é obrigatória",
                  validate: (value) =>
                    parseFloat(value) > 0 || "Altura deve ser maior que zero",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Altura (m)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        disabled={!editando}
                        value={field.value || ""}
                        onChange={(e) =>
                          field.onChange(handleAlturaInput(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="peso"
                rules={{
                  required: "Peso é obrigatório",
                  validate: (value) =>
                    parseFloat(value) > 0 || "Peso deve ser maior que zero",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peso (kg)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        disabled={!editando}
                        value={field.value || ""}
                        onChange={(e) =>
                          field.onChange(handlePesoInput(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            {/* Campo de objetivo com placeholder funcional */}
            <FormField
              control={form.control}
              name="objetivo"
              rules={{ required: "Objetivo é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Objetivo</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      disabled={!editando}
                      className="w-full border border-gray-300 rounded-md p-2"
                    >
                      <option value="" disabled={!!field.value}>
                        {field.value ? field.value : "Selecione um objetivo"}
                      </option>
                      <option value="perder peso">Perder peso</option>
                      <option value="ganhar massa muscular">Ganhar massa muscular</option>
                      <option value="manter peso">Manter peso</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

              {sucesso && <p className="text-green-500 mt-2">{sucesso}</p>}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPerfil;
