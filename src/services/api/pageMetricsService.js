import pageMetrics from '../mockData/pageMetrics.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let data = [...pageMetrics]

const pageMetricsService = {
  async getAll() {
    await delay(200)
    return [...data]
  },

  async getById(id) {
    await delay(150)
    const item = data.find(metric => metric.id === id)
    if (!item) {
      throw new Error('Metric not found')
    }
    return { ...item }
  },

  async create(metricData) {
    await delay(250)
    const newMetric = {
      id: Date.now(),
      ...metricData,
      timestamp: new Date().toISOString()
    }
    data.push(newMetric)
    return { ...newMetric }
  },

  async update(id, updateData) {
    await delay(200)
    const index = data.findIndex(metric => metric.id === id)
    if (index === -1) {
      throw new Error('Metric not found')
    }
    data[index] = { ...data[index], ...updateData, updatedAt: new Date().toISOString() }
    return { ...data[index] }
  },

  async delete(id) {
    await delay(200)
    const index = data.findIndex(metric => metric.id === id)
    if (index === -1) {
      throw new Error('Metric not found')
    }
    const deleted = data.splice(index, 1)[0]
    return { ...deleted }
  }
}

export default pageMetricsService