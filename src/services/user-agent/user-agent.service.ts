import { ref } from 'vue';
import { ServiceMixin } from '../mixin';

/**
 * `UserAgent` provides functionality related to the user-agent like
 * checking whether the application runs on a
 */
export default class UserAgent extends ServiceMixin<UserAgent>() {
  _isDesktop = ref(false);

  static get isDesktop() {
    return UserAgent.instance._isDesktop;
  }

  determineIsDesktop() {
    return window.innerWidth > 960;
  }

  static setup() {
    window.addEventListener('resize', UserAgent.handleResize);
  }

  static handleResize() {}
}
