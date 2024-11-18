// import someConfig from '../../config/someConfig';

export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        // Handle GET request
        res.status(200).json({ message: `Fetching users for ID: ${req.query.id}`});
        break;
      case 'POST':
        // Handle POST request
        const { name } = req.body;
        res.status(201).json({ message: `User ${name} created` });
        break;
      case 'PUT':
        // Handle PUT request
        const { id, updatedName } = req.body;
        res.status(200).json({ message: `User ${id} updated to ${updatedName}` });
        break;
      case 'DELETE':
        // Handle DELETE request
        const { deleteId } = req.body;
        res.status(200).json({ message: `User ${deleteId} deleted` });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }