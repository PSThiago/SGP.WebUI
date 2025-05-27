import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProcessoTable from "../components/ProcessoTable";
import { deleteProcesso, getProcessos } from "../services/api";
import { connectToHub, disconnectHub } from "../services/signalrService";
import type { Processo } from "../types/Processo";

const Home: React.FC = () => {
    const [processos, setProcessos] = useState<Processo[]>([]);
    const navigate = useNavigate();

    const carregarProcessos = async () => {
        try {
            const res = await getProcessos();
            const data = res.data;
            setProcessos(data);
        } catch (err) {
            console.error("Erro ao carregar processos:", err);
        }
    };

    const removerProcesso = async (id: string) => {
        if (!confirm("Tem certeza que deseja remover este processo?")) return;

        try {
            const res = await deleteProcesso(id);

            if (res.status == 200) {
                setProcessos((prev) => prev.filter((p) => p.id !== id));
            } else {
                console.error("Erro ao remover processo");
            }
        } catch (err) {
            console.error("Erro ao remover processo:", err);
        }
    };

    const editarProcesso = (processo: Processo) => {
        navigate(`/processo/${processo.id}`);
    };

    useEffect(() => {
        carregarProcessos();

        connectToHub({
            onAdicionado: (p) => setProcessos((prev) => [...prev, p]),
            onAtualizado: (p) =>
                setProcessos((prev) =>
                    prev.map(item => item.id === p.id ? p : item)
                ),
            onRemovido: (id) =>
                setProcessos((prev) => prev.filter(item => item.id !== id)
                )
        });

        return () => {
            disconnectHub();
        }
    }, []);

    return (
        <Box p={4}>
            <Grid container>
                <Grid size={{ xs: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Lista de Processos
                    </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} display={'flex'} justifyContent={'end'}>
                    <Button variant="contained" color="primary" onClick={() => navigate("/processo")} sx={{ mb: 2 }}>
                        Novo Processo
                    </Button>
                </Grid>
            </Grid>
            <ProcessoTable
                processos={processos}
                onEdit={editarProcesso}
                onDelete={removerProcesso}
            />
        </Box>
    );
};

export default Home;
