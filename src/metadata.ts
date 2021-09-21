import formatISO from 'date-fns/formatISO'
import version from './version'

export interface IVersion {
  header: string | Function
  prefix: string
  metadata: any
}

export interface IVersions {
  [key: string]: IVersion
}

export const versions: IVersions = {}

versions[version] = {
  header: ({ version }) => `########## STOP EDITING HERE - Auto-generated by env-manager v${version} ###########`,
  prefix: '### ',
  metadata: {
    'Generated By': () => 'env-manager (https://github.com/jeffspies/env-manager)',
    'Date Generated': () => formatISO(new Date())
  }
}
