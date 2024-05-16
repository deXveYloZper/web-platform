import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const db = getFirestore();
const storage = getStorage();

const TemplateUpload: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category || !description || !image) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      const imageRef = ref(storage, `templates/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'templates'), {
        name,
        category,
        description,
        imageUrl,
      });

      setName('');
      setCategory('');
      setDescription('');
      setImage(null);
      setError(null);
    } catch (err) {
      setError('Failed to upload template');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleUpload}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      </div>
      <button type="submit" disabled={loading}>Upload Template</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default TemplateUpload;
