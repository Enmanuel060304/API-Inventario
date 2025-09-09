export class ClienteController {
  constructor({ ClienteService }) {
    this.ClienteService = ClienteService;
  }

  createClient = async (req, res) => {
    try {
      const clientData = req.body;
      const newClient = await this.ClienteService.createClient(clientData);
      res.status(201).json(newClient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getAllClients = async (req, res) => {
    try {
      const clients = await this.ClienteService.getAllClients();
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getClientById = async (req, res) => {
    try {
      const { id } = req.params;
      const client = await this.ClienteService.getClientById(id);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  updateClient = async (req, res) => {
    try {
      const { id } = req.params;
      const clientData = req.body;
      const updatedClient = await this.ClienteService.updateClient(id, clientData);
      if (!updatedClient) {
        return res.status(404).json({ error: "Client not found" });
      }
      res.status(200).json(updatedClient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deleteClient = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedClient = await this.ClienteService.deleteClient(id);
      if (!deletedClient) {
        return res.status(404).json({ error: "Client not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}