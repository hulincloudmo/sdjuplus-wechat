import {promisic} from './util'
import {baseUrl} from '../../api/index'

class Http {
  static async request ({
    url,
    data,
    method = 'GET'
  }) {
    const res = await promisic(wx.request)({
      url: `${baseUrl}/${url}`,
      data,
      method
    })
    return res.data
  }
}

export {
  Http
}
