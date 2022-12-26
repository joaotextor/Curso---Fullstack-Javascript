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
  id,
  name,
  lastname,
  email,
  avatar,
  onRemoveCustomer,
  onEditCustomer,
}) {

const [openModal, setOpenModal] = useState(false)

const handleToggleOpenModal = () => {
  setOpenModal(!openModal)
}

const handleConfirmModal = id => {
  onRemoveCustomer(id)
  handleToggleOpenModal()
}

const handleRemoveCustomer = () => {
  handleToggleOpenModal()
}

const handleEditCustomer = id => {
  onEditCustomer(id)
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
        <IconButton aria-label="add to favorites" onClick={() => handleEditCustomer(id)}>
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
      onConfirm={() => handleConfirmModal(id)}
      title={"Delete Confirmation"} 
      message={"Coforme customer removal?"}
    />
    </>
  )
}