import { IContainer } from '@aurelia/kernel';
import { IScheduler, valueConverter } from '@aurelia/runtime';
import { HTMLTestContext } from '@aurelia/testing';

export interface TestExecutionContext<TApp extends any> {
  ctx: HTMLTestContext;
  container: IContainer;
  host: HTMLElement;
  app: TApp;
  scheduler: IScheduler;
}

export type TestFunction<TTestContext extends TestExecutionContext<any>> = (ctx: TTestContext) => void | Promise<void>;
export type WrapperFunction<TTestContext extends TestExecutionContext<any>, TSetupContext> = (testFunction: TestFunction<TTestContext>, setupContext?: TSetupContext) => void | Promise<void>;

export function createSpecFunction<TTestContext extends TestExecutionContext<any>, TSetupContext = Record<string, any>>(wrap: WrapperFunction<TTestContext, TSetupContext>) {

  function $it(title: string, testFunction: TestFunction<TTestContext>, setupContext?: TSetupContext) {
    it(title, async function () { await wrap(testFunction, setupContext); });
  }

  $it.only = function (title: string, testFunction: TestFunction<TTestContext>, setupContext?: TSetupContext) {
    it.only(title, async function () { await wrap(testFunction, setupContext); });
  };

  $it.skip = function (title: string, testFunction: TestFunction<TTestContext>, setupContext?: TSetupContext) {
    it.skip(title, async function () { await wrap(testFunction, setupContext); });
  };
  return $it;
}

@valueConverter('toNumber')
export class ToNumberValueConverter {
  public fromView(value: string): number { return Number(value) || void 0; }
}
