import { Slug } from './slug'

test('create a slug', () => {
  const slug = Slug.createFromText('Example title')

  expect(slug.value).toEqual('example-title')
})
