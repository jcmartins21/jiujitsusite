'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Alert,
  Paper,
  IconButton
} from '@mui/material';
import {
  CloudUpload,
  Delete,
  Image
} from '@mui/icons-material';

interface ImageUploadProps {
  onImageUploaded: (url: string, publicId: string) => void;
  folder?: string;
  multiple?: boolean;
  maxFiles?: number;
}

export default function ImageUpload({ 
  onImageUploaded, 
  folder = 'gamafigth',
  multiple = false,
  maxFiles = 5
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<Array<{url: string, publicId: string}>>([]);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    if (multiple && files.length > maxFiles) {
      setError(`Máximo de ${maxFiles} arquivos permitidos`);
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const uploadPromises = Array.from(files).map(uploadFile);
      const results = await Promise.all(uploadPromises);
      
      if (multiple) {
        setUploadedImages(prev => [...prev, ...results]);
        results.forEach(result => onImageUploaded(result.url, result.publicId));
      } else {
        setUploadedImages([results[0]]);
        onImageUploaded(results[0].url, results[0].publicId);
      }
    } catch (err) {
      setError('Erro ao fazer upload das imagens');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const uploadFile = async (file: File): Promise<{url: string, publicId: string}> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro no upload');
    }

    const data = await response.json();
    return {
      url: data.url,
      publicId: data.publicId
    };
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
  };

  return (
    <Box>
      <Paper 
        sx={{ 
          p: 3, 
          border: '2px dashed #ccc',
          borderColor: 'primary.main',
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': {
            borderColor: 'primary.dark',
            backgroundColor: 'action.hover'
          }
        }}
        onClick={() => document.getElementById('image-upload')?.click()}
      >
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        
        <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        
        <Typography variant="h6" gutterBottom>
          {uploading ? 'Fazendo upload...' : 'Clique para selecionar imagens'}
        </Typography>
        
        <Typography variant="body2" color="textSecondary">
          {multiple 
            ? `Arraste ou clique para selecionar até ${maxFiles} imagens`
            : 'Arraste ou clique para selecionar uma imagem'
          }
        </Typography>
        
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Formatos: JPG, PNG, WebP, GIF (máx. 5MB cada)
        </Typography>

        {uploading && (
          <Box sx={{ mt: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {uploadedImages.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Imagens Enviadas ({uploadedImages.length})
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {uploadedImages.map((image, index) => (
              <Paper 
                key={index} 
                sx={{ 
                  position: 'relative',
                  width: 150,
                  height: 150,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={image.url}
                  alt={`Uploaded ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                  onClick={() => removeImage(index)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Paper>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
} 