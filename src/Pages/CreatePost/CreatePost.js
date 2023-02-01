import { Button, TextField, Typography } from '@mui/material';
import userEvent from '@testing-library/user-event';
import { useState } from 'react'
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { insertDocument, response } = useInsertDocument("posts");

  const { user } = useAuthValue();

  const navigate = useNavigate();
  console.log(user, 'user');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    })

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

    navigate("/");
  }

  return (
    <>
      <Typography gutterBottom sx={{ marginTop: '20px' }} variant="h2">Cadastrar Post</Typography>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <div className='Form'>
        <form>
          <Typography>Título:</Typography>
          <TextField
            fullWidth
            type="text"
            name="text"
            inputProps={{ style: { backgroundColor: '#3e4444' } }}
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Typography>URL da imagem:</Typography>
          <TextField
            fullWidth
            type="text"
            name="image"
            inputProps={{ style: { backgroundColor: '#3e4444' } }}
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <Typography>Conteúdo:</Typography>
          <TextField
            fullWidth
            name="body"
            inputProps={{ style: { backgroundColor: '#3e4444' } }}
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
          <Typography>Tags:</Typography>
          <TextField
            fullWidth
            type="text"
            name="tags"
            inputProps={{ style: { backgroundColor: '#3e4444' } }}
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
          {!response.loading && <Button
            sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }}
            className="btn" onClick={handleSubmit}>Criar post!</Button>}
          {response.loading && (
            <Button className="btn"
              sx={{ marginTop: '10px', color: 'white', backgroundColor: '#7B68EE' }}
              disabled>
              Aguarde.. .
            </Button>
          )}
          {(response.error || formError) && (
            <p className="error">{response.error || formError}</p>
          )}
        </form>
      </div>
    </>
  )
}

export default CreatePost