import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(componenents: MDXComponents): MDXComponents {
  return {
    ...componenents
  }
}
