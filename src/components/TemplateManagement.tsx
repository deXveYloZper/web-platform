import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const db = getFirestore();

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

const TemplateManagement: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'templates'));
        const templatesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Template));
        setTemplates(templatesData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch templates');
      }
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'templates', id));
      setTemplates(templates.filter(template => template.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete template');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Template Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {templates.map(template => (
            <li key={template.id}>
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <img src={template.imageUrl} alt={template.name} style={{ width: '100px' }} />
              <button onClick={() => handleDelete(template.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TemplateManagement;
