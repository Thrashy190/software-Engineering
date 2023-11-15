import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

const Review = ({ courseName }) => {
    return (
        <div>
            <div className="text-lg pt-4">
                <Typography color="primary" variant="h4">
                    {`Reseña de ${courseName ? courseName : 'Curso'}`}
                </Typography>
            </div>
            <div>
                <Input placeholder="Type in here…" />
            </div>
        </div>
    );
}

export default Review;