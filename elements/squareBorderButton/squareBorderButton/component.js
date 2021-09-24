import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class SquareBorderButtonComponent extends vcvAPI.elementComponent {
  render () {
    const { id, atts, editor } = this.props
    const { buttonText, buttonUrl, alignment, metaCustomId, customClass } = atts

    let containerClasses = 'vce-square-border-button-container'
    let wrapperClasses = 'vce-square-border-button-wrapper vce'
    let classes = 'vce-square-border-button'
    let customProps = {}
    let CustomTag = 'button'

    if (buttonUrl && buttonUrl.url) {
      CustomTag = 'a'
      const { url, title, targetBlank, relNofollow } = buttonUrl
      customProps = {
        href: url,
        title: title,
        target: targetBlank ? '_blank' : undefined,
        rel: relNofollow ? 'nofollow' : undefined
      }
    }

    let mixinData = this.getMixinData('titleColor')

    if (mixinData) {
      classes += ` vce-square-border-button--title-color-${mixinData.selector}`
    }

    mixinData = this.getMixinData('backgroundColor')

    if (mixinData) {
      classes += ` vce-square-border-button--background-color-${mixinData.selector}`
    }

    mixinData = this.getMixinData('borderColor')

    if (mixinData) {
      classes += ` vce-square-border-button--border-color-${mixinData.selector}`
    }

    mixinData = this.getMixinData('borderWidth')

    if (mixinData) {
      classes += ` vce-square-border-button--border-width-${mixinData.selector}`
    }

    if (alignment) {
      containerClasses += ` vce-square-border-button--align-${alignment}`
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }
    
    if (typeof customClass === 'string' && customClass) {
      containerClasses += ' ' + customClass
    }

    const doMBB = this.applyDO('margin border background')
    const doPA = this.applyDO('padding animation')

    return (
      <div className={containerClasses} {...editor}>
        <div className={wrapperClasses} id={'el-' + id} {...doMBB}>
          <CustomTag className={classes} {...customProps} {...doPA}>
            <span>{buttonText}</span>
          </CustomTag>
        </div>
      </div>
    )
  }
}
