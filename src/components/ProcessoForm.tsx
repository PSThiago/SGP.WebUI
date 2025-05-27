import {
    Box, Button,
    Grid,
    MenuItem,
    TextField, Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProcesso, updateProcesso } from "../services/api";
import type { Processo } from "../types/Processo";

const prioridades = ["Baixa", "Média", "Alta"];
const statusList = ["Pendente", "Em andamento", "Concluído"];

type ProcessoFormProps = {
    initialValues: Processo | undefined;
    id: string | undefined;
}

const ProcessoForm: React.FC<ProcessoFormProps> = ({ initialValues, id }) => {
    const navigate = useNavigate();

    const isEdicao = id !== undefined;

    const [form, setForm] = useState<Processo>(initialValues ?? {
        nome: "",
        responsavel: "",
        prioridade: "Média",
        status: "Pendente",
        porcentagem: 0
    });

    useEffect(() => {
        if (initialValues)
            setForm(initialValues);
    }, [initialValues])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "porcentagem" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isEdicao) {
            var res = await updateProcesso(id, form);
        } else {
            var res = await createProcesso(form);
        }

        if (res.status == 200 || res.status == 201) {
            navigate("/");
        } else {
            alert("Erro ao salvar processo.");
        }
    };

    return (
        <Box p={4}>
            <Typography variant="h5" gutterBottom>
                {isEdicao ? "Editar Processo" : "Novo Processo"}
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Nome"
                            name="nome"
                            fullWidth
                            required
                            value={form.nome}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 6 }}>
                        <TextField
                            label="Responsável"
                            name="responsavel"
                            fullWidth
                            required
                            value={form.responsavel}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 6 }}>
                        <TextField
                            select
                            label="Prioridade"
                            name="prioridade"
                            fullWidth
                            value={form.prioridade}
                            onChange={handleChange}
                        >
                            {prioridades.map((p) => (
                                <MenuItem key={p} value={p}>{p}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid size={{ xs: 6 }}>
                        <TextField
                            select
                            label="Status"
                            name="status"
                            fullWidth
                            value={form.status}
                            onChange={handleChange}
                        >
                            {statusList.map((s) => (
                                <MenuItem key={s} value={s}>{s}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid size={{ xs: 6 }}>
                        <TextField
                            label="Porcentagem"
                            name="porcentagem"
                            type="number"
                            fullWidth
                            inputProps={{ min: 0, max: 100 }}
                            value={form.porcentagem}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
                    <Button variant="outlined" onClick={() => navigate("/")}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Salvar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProcessoForm;
