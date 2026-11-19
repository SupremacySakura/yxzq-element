import type { ReactNode } from "react";
import "yxzq-element";

const noop = (): void => {};
const dateShortcuts = [{ label: "今天", value: "2026-11-19" }];
const disabledDate = (): boolean => false;
const formatProgress = (value: number): string => `${value}%`;

export function ContractTypes(): ReactNode {
  return (
    <>
      <super-autocomplete
        value="a"
        items={["a"]}
        filter={(item, query) => item.value.includes(query)}
        onsuper-autocomplete-input={noop}
        onsuper-autocomplete-change={noop}
        onsuper-autocomplete-clear={noop}
        onsuper-autocomplete-open-change={noop}
      />
      <super-avatar src="a.png" alt="头像" size="small" shape="circle" />
      <super-badge value="3" max="9" dot status="danger">
        <span>消息</span>
      </super-badge>
      <super-breadcrumb items={[{ label: "首页", href: "#" }]} />
      <super-button
        variant="primary"
        size="medium"
        shape="pill"
        loadingText="处理中"
      >
        按钮
      </super-button>
      <super-card variant="outlined" clickable onsuper-card-click={noop}>
        内容
      </super-card>
      <super-checkbox
        checked
        indeterminate={false}
        onsuper-checkbox-change={noop}
      >
        复选
      </super-checkbox>
      <super-date-picker
        value="2026-11-19"
        mode="date"
        shortcuts={dateShortcuts}
        disabledDate={disabledDate}
        onsuper-date-picker-change={noop}
        onsuper-date-picker-clear={noop}
        onsuper-date-picker-open-change={noop}
      />
      <super-dialog
        open={false}
        title="标题"
        closeOnEscape
        onsuper-dialog-before-close={noop}
        onsuper-dialog-close={noop}
        onsuper-dialog-confirm={noop}
        onsuper-dialog-cancel={noop}
      />
      <super-divider direction="horizontal" contentPosition="left">
        分割
      </super-divider>
      <super-drawer
        open={false}
        title="抽屉"
        placement="right"
        onsuper-drawer-before-close={noop}
        onsuper-drawer-close={noop}
        onsuper-drawer-confirm={noop}
        onsuper-drawer-cancel={noop}
      />
      <super-dropdown
        items={[{ key: "edit", label: "编辑" }]}
        onsuper-dropdown-select={noop}
        onsuper-dropdown-open-change={noop}
      >
        <button>更多</button>
      </super-dropdown>
      <super-empty description="暂无数据" size="medium" />
      <super-form
        schema={{ fields: [] }}
        value={{}}
        onsuper-form-change={noop}
        onsuper-form-submit={noop}
        onsuper-form-invalid={noop}
        onsuper-form-reset={noop}
      />
      <super-input
        value="文本"
        type="text"
        size="medium"
        validation="none"
        onsuper-input={noop}
        onsuper-change={noop}
        onsuper-clear={noop}
        onsuper-password-visibility={noop}
      />
      <super-menu
        items={[{ key: "home", label: "首页" }]}
        active="home"
        onsuper-menu-select={noop}
        onsuper-menu-open-change={noop}
      />
      <super-message
        open={false}
        message="消息"
        type="info"
        duration={0}
        onsuper-message-close={noop}
      />
      <super-notification
        open={false}
        title="通知"
        message="内容"
        placement="top-right"
        duration={0}
        onsuper-notification-close={noop}
      />
      <super-pagination
        total={120}
        page={1}
        pageSize={10}
        onsuper-pagination-change={noop}
      />
      <super-popconfirm
        title="确认"
        trigger="click"
        onsuper-popconfirm-confirm={noop}
        onsuper-popconfirm-cancel={noop}
        onsuper-popconfirm-open-change={noop}
      >
        <button>删除</button>
      </super-popconfirm>
      <super-popover
        content="内容"
        trigger="click"
        onsuper-popover-open-change={noop}
      >
        <button>打开</button>
      </super-popover>
      <super-progress value={50} max={100} format={formatProgress} />
      <super-radio
        checked
        name="group"
        value="one"
        onsuper-radio-change={noop}
      >
        单选
      </super-radio>
      <super-rate value={3} max={5} onsuper-rate-change={noop} />
      <super-select
        value="a"
        multiple={false}
        open
        onsuper-select-change={noop}
        onsuper-select-clear={noop}
        onsuper-select-open-change={noop}
        onsuper-select-search={noop}
      >
        <option value="a">A</option>
      </super-select>
      <super-skeleton variant="text" rows={2} animated />
      <super-slider
        value={40}
        min={0}
        max={100}
        onsuper-slider-change={noop}
      />
      <super-space direction="horizontal" size="small">
        <span>一</span>
      </super-space>
      <super-steps
        items={[{ title: "第一步" }]}
        active={0}
        clickable
        onsuper-steps-change={noop}
      />
      <super-switch checked onsuper-switch-change={noop}>
        开关
      </super-switch>
      <super-table
        columns={[{ key: "name", title: "名称" }]}
        rows={[{ id: "1", name: "A" }]}
        selectable
        onsuper-table-sort={noop}
        onsuper-table-select={noop}
      />
      <super-tabs
        items={[{ key: "a", label: "A" }]}
        active="a"
        onsuper-tabs-change={noop}
        onsuper-tabs-close={noop}
      />
      <super-tag value="a" closable onsuper-tag-close={noop}>
        标签
      </super-tag>
      <super-time-picker
        value="09:30"
        range={false}
        shortcuts={[{ label: "上午", value: "09:00" }]}
        onsuper-time-picker-change={noop}
        onsuper-time-picker-clear={noop}
        onsuper-time-picker-open-change={noop}
      />
      <super-tooltip content="提示" onsuper-tooltip-open-change={noop}>
        <button>悬停</button>
      </super-tooltip>
      <super-upload
        fileList={[]}
        maxCount={3}
        onsuper-upload-change={noop}
        onsuper-upload-submit={noop}
        onsuper-upload-remove={noop}
        onsuper-upload-exceed={noop}
      />
    </>
  );
}
