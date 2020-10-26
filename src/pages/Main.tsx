import React, {FormEvent, useState, ChangeEvent} from "react";
import { FiPlus } from "react-icons/fi";
import '../styles/pages/Main.css';
import api from "../services/api";
import {useHistory} from 'react-router-dom'
import Buttons from "../components/Buttons";

export default function CreateOrphanage() {

  const history = useHistory();

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

//Uso do form data
async function handleSubmit(event: FormEvent){
  event.preventDefault()
  const data = new FormData();
  images.forEach(image => {
    data.append('images',image);
  });

  await api.post('upload', data);
//DETALHE IMPORTE: SE O HISTORY PUSH NÃO REDIRECIONAR DE PRIMEIRA
//É PORQUE ELE ESTÁ ESPERANDO O AXIOS TERMINAR O POST
  alert('Imagem cadastrada com sucesso');
  history.push('/');

}

function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
  if (!event.target.files){
    return;
  }
  const selectedImages = Array.from(event.target.files);
  setImages(selectedImages);

  const selectedImagesPreview = selectedImages.map(image =>{
    return URL.createObjectURL(image);
  });

  setPreviewImages(selectedImagesPreview);

}

  return (
    <div id="page-create-orphanage">
        <Buttons/>
      <main>
        <form className="upload-form" onSubmit={handleSubmit}>
          <fieldset>
              <div className="input-block">
              <label htmlFor="images">Adicione fotos do seu produto</label>
            
            <div className="images-container">
                  {previewImages.map(image => {
                    return <img key={image} src={image}/>
                  })}
            <label className="new-image" htmlFor='image[]'>
            <FiPlus size={24} color="#15b6d6" />
            <input multiple onChange={handleSelectImages} type="file" id='image[]'/>
            </label>
            </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}