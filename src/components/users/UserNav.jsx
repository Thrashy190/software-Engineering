import { Typography, Button } from '@mui/material';

const UserNav = () => {
  return (
    <div className="flex items-center flex-col gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/69998059?v=4https://avatars.githubusercontent.com/u/69998059?v=4"
        alt=""
        srcset=""
        className="rounded-full w-40 h-40"
      />

      <Typography color="primary" variant="h5">
        César Zárate
      </Typography>

      <Button fullWidth variant="contained">
        Perfil
      </Button>

      <Button fullWidth variant="outlined">
        Información Bancaria
      </Button>

      <Button fullWidth variant="outlined">
        Cursos comprados
      </Button>

      <Button fullWidth variant="outlined">
        Comentarios
      </Button>
    </div>
  )
}

export default UserNav;
