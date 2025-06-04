import earlyAccessApplications from '../mockData/earlyAccessApplication.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let data = [...earlyAccessApplications]

const earlyAccessApplicationService = {
  async getAll() {
    await delay(300)
    return [...data]
  },

  async getById(id) {
    await delay(250)
    const item = data.find(app => app.id === id)
    if (!item) {
      throw new Error('Application not found')
    }
    return { ...item }
  },

  async create(applicationData) {
    await delay(400)
    const newApplication = {
      id: Date.now(),
      ...applicationData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    data.push(newApplication)
    return { ...newApplication }
  },

  async update(id, updateData) {
    await delay(350)
    const index = data.findIndex(app => app.id === id)
    if (index === -1) {
      throw new Error('Application not found')
    }
    data[index] = { ...data[index], ...updateData, updatedAt: new Date().toISOString() }
    return { ...data[index] }
  },

  async delete(id) {
    await delay(300)
    const index = data.findIndex(app => app.id === id)
    if (index === -1) {
      throw new Error('Application not found')
    }
    const deleted = data.splice(index, 1)[0]
    return { ...deleted }
  }
}

export default earlyAccessApplicationService