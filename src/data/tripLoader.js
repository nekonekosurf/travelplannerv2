import indonesiaTrip from '../../data/trip.json'
import cebuTrip from '../../data/trip-cebu.json'
import indiaNepalTrip from '../../data/trip-india-nepal.json'

export const TRIPS = {
  india: { id: 'india', label: '北インド＆ネパール16日間', data: indiaNepalTrip },
  indonesia: { id: 'indonesia', label: 'インドネシア15日間', data: indonesiaTrip },
  cebu: { id: 'cebu', label: 'セブ島カジノ3泊4日', data: cebuTrip },
}

export const DEFAULT_TRIP_ID = 'india'

export function getCurrentTripId() {
  if (typeof window === 'undefined') return DEFAULT_TRIP_ID
  const params = new URLSearchParams(window.location.search)
  const id = params.get('trip')
  return id && TRIPS[id] ? id : DEFAULT_TRIP_ID
}

export function getCurrentTrip() {
  return TRIPS[getCurrentTripId()].data
}

export function buildTripUrl(tripId, hashPath = '#/') {
  const base = window.location.pathname
  const query = tripId === DEFAULT_TRIP_ID ? '' : `?trip=${tripId}`
  return `${base}${query}${hashPath}`
}
