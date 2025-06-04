import demoBookings from '../mockData/demoBooking.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let data = [...demoBookings]

const demoBookingService = {
  async getAll() {
    await delay(300)
    return [...data]
  },

  async getById(id) {
    await delay(250)
    const item = data.find(booking => booking.id === id)
    if (!item) {
      throw new Error('Booking not found')
    }
    return { ...item }
  },

  async create(bookingData) {
    await delay(400)
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'scheduled',
      createdAt: new Date().toISOString()
    }
    data.push(newBooking)
    return { ...newBooking }
  },

  async update(id, updateData) {
    await delay(350)
    const index = data.findIndex(booking => booking.id === id)
    if (index === -1) {
      throw new Error('Booking not found')
    }
    data[index] = { ...data[index], ...updateData, updatedAt: new Date().toISOString() }
    return { ...data[index] }
  },

  async delete(id) {
    await delay(300)
    const index = data.findIndex(booking => booking.id === id)
    if (index === -1) {
      throw new Error('Booking not found')
    }
    const deleted = data.splice(index, 1)[0]
    return { ...deleted }
  }
}

export default demoBookingService