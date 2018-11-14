import styled from 'styled-components';

const TextBox = styled.div`
input
  width 100%
  height 36px
  font-size 13px
  border solid 1px $grey-border
  max-height 100%
  border-radius 2px
  &:focus
    border solid 1px $grey-pinkish

&.is-error
  input
    border solid 1px $red !important
    background $purple-very-light

&.is-large
  input
    height 46px
    font-size 22px

&.is-verified
  after()
  &:after
    width 18px
    height 18px
    bottom 9px
    right 7px
  input
    padding-right 27px
    padding-left 27px
  &.is-large
    &:after
      bottom 14px
      right 12px
    input
      padding-right 32px
      padding-left 32px
&.is-not-verified
  input
    padding-right 27px
    padding-left 27px
  &.is-large
    &:after
      bottom 14px
      right 12px
    input
      padding-right 32px
      padding-left 32px

&.is-verified
  &:after
    background-image url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Ccircle cx='9' cy='9' r='8.4' stroke='%2338B649' stroke-width='1.2' opacity='.9'/%3E %3Cpath fill='%2338B649' fill-rule='nonzero' d='M5.093 9.85A.403.403 0 0 1 5 9.605c0-.07.031-.175.093-.245l.437-.49a.279.279 0 0 1 .436 0l.03.035L7.71 10.97a.14.14 0 0 0 .218 0l4.175-4.865h.031a.279.279 0 0 1 .436 0l.437.49c.124.14.124.35 0 .49l-4.985 5.81a.27.27 0 0 1-.218.105.27.27 0 0 1-.218-.105l-2.43-2.94-.063-.105z'/%3E %3C/g%3E %3C/svg%3E")
  input
    border-color $green
    background-color $green-ice

&.is-not-verified
  &:after
    background-image url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Ccircle cx='9' cy='9' r='8.4' stroke='%23EA222F' stroke-width='1.2' opacity='.9'/%3E %3Cpath fill='%23EA222F' d='M9 10.01l2.522 2.522a.715.715 0 0 0 1.01-1.01L10.01 9l2.522-2.522a.715.715 0 0 0-1.01-1.01L9 7.99 6.478 5.468a.715.715 0 0 0-1.01 1.01L7.99 9l-2.522 2.522a.715.715 0 0 0 1.01 1.01L9 10.01z'/%3E %3C/g%3E %3C/svg%3E")
  input
    border-color $red
    background-color $purple-very-light

label.is-required
  before()
  &:before
    content '*'
    color $red
    top 0
    right -9px
`

export default TextBox;
