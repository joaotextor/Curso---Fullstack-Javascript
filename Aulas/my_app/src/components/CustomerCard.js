import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@mui/material'

import { red } from '@mui/material/colors'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'

export default function CustomerCard({
  name,
  lastname,
  email,
  avatar
}) {

const [openModal, setOpenModal] = useState(false)

const handleToggleOpenModal = () => {
  setOpenModal(!openModal)
}

const handleConfirmModal = () => {
  handleToggleOpenModal()
  alert('ok')
}

const handleRemoveCustomer = () => {
  handleToggleOpenModal()
}

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleRemoveCustomer}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    <ModalConfirm
      open={openModal}
      onClose={handleToggleOpenModal}
      onConfirm={handleConfirmModal}
      title={"Delete Confirmation"} 
      message={"Coforme customer removal?"}
    />
    </>
  )
}